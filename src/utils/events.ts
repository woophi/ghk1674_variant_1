import { Variant } from '../common/types';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export const sendDataToGA = async (viewType: Variant) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycbyvDbpppNfvV4kmoWIfpl-G1dwjS1ugvujtzSgH-RS0R38CxSLqJq_JU3u_zwE7RckmJQ/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, view_type: viewType, variant: 'variant_1' }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};

const pushToDataLayer = (event: string, data: Record<string, unknown>) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
};

export const trackClick = (clickOrder: '1' | '2' | '3') => {
  pushToDataLayer(`1673_1_more_button_click_${clickOrder}`, {});
};
