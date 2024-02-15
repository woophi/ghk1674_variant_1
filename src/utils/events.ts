declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export const sendDataToGA = async (items: string[]) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycbzK0z0M2mF1lJ2nKBlYewm6RBhxHlfLpbwlC5LzXF7gy0akM0fdu3SDdd_8C80yyDetRw/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, cart: items.join(';') }),
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
