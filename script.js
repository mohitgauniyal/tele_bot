window.onload = function () {
    const tg = window.Telegram.WebApp;
    tg.expand(); // Expand the mini app
  
    const userInfo = document.getElementById('user-info');
    const mainButton = document.getElementById('main-button');
  
    // Get user info
    if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
      const user = tg.initDataUnsafe.user;
      userInfo.innerText = `Hello, ${user.first_name} ${user.last_name || ''}!`;
    } else {
      userInfo.innerText = 'User information not available.';
    }
  
    // Handle main button click
    mainButton.addEventListener('click', () => {
      tg.sendData("Button clicked!"); // Sends data back to bot
      tg.close(); // Closes the Mini App
    });
  };
  