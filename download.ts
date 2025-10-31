import axios from 'axios';
import { message } from 'antd';

export const getFileNameFromDisposition = (value: string) => {
  const patterns = [
    /filename\*=[^']+'\w*'"([^"]+)";?/i,
    /filename\*=[^']+'\w*'([^;]+);?/i,
    /filename="([^;]*);?"/i,
    /filename=([^;]*);?/i
  ];

  let responseFilename: RegExpExecArray | null = null;
  patterns.some(regex => {
    responseFilename = regex.exec(value);
    return responseFilename !== null;
  });
  const filename = responseFilename as RegExpExecArray | null;
  if (filename !== null && filename.length > 1) {
    try {
      return decodeURIComponent(filename[1]);
    } catch (e) {
      console.error(e);
    }
  }

  return null;
};

export function download(url: string, params?: any, method?: any, values?: any, isSendKim: any = false,) {
  return new Promise<any>((resolve, reject) => {
    let req: any = { params: params };
    if (method && method == 'POST') req = { data: { ...values } };
    const hide = message.loading('导出中..请稍后', 0);
    axios
      .request({
        responseType: 'blob',
        headers: {
          'Content-Type': 'application/json'
        },
        ...req,
        url: url,
        method: method || 'GET'
      })
      .then(function(res: any) {
        if (isSendKim) {
          setTimeout(hide, 0);
          const reader = new FileReader();
          reader.readAsText(res.data);
          reader.onload = (e: any) => {
            const result = JSON.parse(e.target.result);
            if (result.code === 0) {
              message.success(result.message);
              resolve('success');
              return;
            } else {
              message.error(result.message);
              reject('fail');
              return;
            }
          };
        } else {
          if (res.headers['content-type'].includes('application/json')) {
            setTimeout(hide, 0);
            message.error('下载失败');
            reject('fail');
            return;
          }
          const disposition: string | undefined =
            res.headers['content-disposition'] || res.headers['Content-Disposition'];
          const fileName =
            (disposition && getFileNameFromDisposition(disposition)) || 'initialzr.zip';
          const alink = document.createElement('a');
          alink.download = fileName;
          alink.style.display = 'none';
          alink.href = URL.createObjectURL(res.data); // 这里是将文件流转化为一个文件地址
          document.body.appendChild(alink);
          alink.click();
          setTimeout(hide, 0);
          message.success('下载成功');
          URL.revokeObjectURL(alink.href); // 释放URL 对象
          document.body.removeChild(alink);
          resolve('success');
        }
      })
      .catch((error: any) => {
        setTimeout(hide, 0);
        message.error(error);
        reject('fail');
      });
  });
}

export function iframeDownload(url: string) {
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = url;
  document.body.appendChild(iframe);
  setTimeout(() => {
    iframe.remove();
  }, 1 * 60 * 1000);
}
