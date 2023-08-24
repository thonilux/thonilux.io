document.addEventListener('DOMContentLoaded', function() {
  const showNotificationButton = document.getElementById('showNotification');

  showNotificationButton.addEventListener('click', function() {
    const userChoice = confirm('Apakah kamu mau bunga?');

    if (userChoice) {
      window.location.href = 'flower.html';
    } else {
      alert('gamau yaudah.');
    }
  });
});
