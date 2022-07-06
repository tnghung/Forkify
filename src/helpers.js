import { SEC_TIMEOUT } from './js/config';

export const getJSON = async function (url) {
  try {
    const response = await fetch(url);
    const data = await Promise.race([response.json(), timeout(SEC_TIMEOUT)]);

    if (!response.ok) throw new Error(`${data.message} (${response.status})`);

    return data;
  } catch (error) {
    throw error;
  }
};

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const sendJSON = async function (url, uploadData) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
    const data = await Promise.race([response.json(), timeout(SEC_TIMEOUT)]);

    if (!response.ok) throw new Error(`${data.message} (${response.status})`);

    return data;
  } catch (error) {
    throw error;
  }
};
