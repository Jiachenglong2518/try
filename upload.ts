import axios from 'axios';
import { message, Modal } from 'antd';
import React from 'react';

export const upload = (url?: string, data?: any, params?: any) => {
  return new Promise<any>((resolve, reject) => {
    const alink = document.createElement('input');
    alink.type = 'file';

    function goUpload(e: any) {
      const form = new FormData();
      const i = e.target?.files[0].name.lastIndexOf('.');
      const isXls = ['.xlsx', '.xls'].includes(e.target?.files[0].name.slice(i));
      if (!isXls) {
        message.error('文件格式不正确');
        reject('fail');
      } else {
        form.append('file', e.target?.files[0]);
        data &&
          Object.keys(data).forEach(item => {
            form.append(item, data[item]);
          });
        const hide = message.loading('正在导入', 0);
        console.log(form,  e.target?.files[0], {
          responseType: 'blob',
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'post',
          url: url || '/kfms/api/maintain/import',
          data: form,
          params: params
        })
        axios
          .request({
            responseType: 'blob',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            method: 'post',
            url: url || '/kfms/api/maintain/import',
            data: form,
            params: params
          })
          .then(res => {
            hide();
            if (
              res.headers.hasOwnProperty('content-type') &&
              res.headers['content-type'].includes('excel')
            ) {
              const blod = new Blob([res.data], {
                type: 'application/vnd.ms-excel'
              });
              const alinekDown = document.createElement('a');
              alinekDown.download = '错误信息.xlsx';
              alinekDown.style.display = 'none';
              alinekDown.href = URL.createObjectURL(blod); // 这里是将文件流转化为一个文件地址
              document.body.appendChild(alinekDown);
              alinekDown.click();
              URL.revokeObjectURL(alinekDown.href); // 释放URL 对象
              document.body.removeChild(alinekDown);
              message.error('导入失败！');
              reject('fail');
              return;
            } else {
              const reader = new FileReader();
              reader.readAsText(res.data);
              reader.onload = (e: any) => {
                const { code, message: mes } = JSON.parse(e.target.result);
                if (code === 0) {
                  message.success(mes || '导入成功！');
                  resolve('success');
                } else {
                  message.error(mes || '模版不正确，导入失败');
                  reject('fail');
                  return;
                }
              };
            }
          })
          .catch((error: any) => {
            hide();
            message.error(error);
            reject('fail');
          });
      }
    }

    alink.onchange = goUpload;
    alink.style.display = 'none';
    document.body.appendChild(alink);
    alink.click();
    // URL.revokeObjectURL(alink.href); // 释放URL 对象
    document.body.removeChild(alink);
  });
};

export const uploadManual = (url: string, data?: any, params?: any) => {
  return new Promise((resolve, reject) => {
    const hide = message.loading('正在导入', 0);
    axios
      .request({
        responseType: 'blob',
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        url: url || '/kfms/api/maintain/import',
        data: data,
        params: params
      })
      .then((res: any) => {
        hide();
        if (
          res.headers.hasOwnProperty('content-type') &&
          res.headers['content-type'].includes('excel')
        ) {
          const blod = new Blob([res.data], {
            type: 'application/vnd.ms-excel'
          });
          const alinekDown = document.createElement('a');
          alinekDown.download = '错误信息.xlsx';
          alinekDown.style.display = 'none';
          alinekDown.href = URL.createObjectURL(blod); // 这里是将文件流转化为一个文件地址
          document.body.appendChild(alinekDown);
          alinekDown.click();
          URL.revokeObjectURL(alinekDown.href); // 释放URL 对象
          document.body.removeChild(alinekDown);
          message.error('导入失败！');
          reject('fail');
          return;
        } else {
          const reader = new FileReader();
          reader.readAsText(res.data);
          reader.onload = (e: any) => {
            const { code, message: mes, result } = JSON.parse(e.target.result);
            if (code === 0) {
              // 确保传递给message.success的是字符串类型
              const successMessage = typeof result === 'string' ? result : 
                                   typeof mes === 'string' ? mes : '导入成功！';
              message.success(successMessage);
              resolve('success');
            } else {
              message.error(mes || '模版不正确，导入失败');
              reject('fail');
              return;
            }
          };
        }
      })
      .catch((error: any) => {
        hide();
        message.error(error);
        reject('fail');
      });
  });
};
