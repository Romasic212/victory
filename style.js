const images = document.querySelectorAll('.portfolio-grid img');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

images.forEach(image => {
  image.addEventListener('click', () => {
    const img = document.createElement('img');
    img.src = image.src;
    lightbox.appendChild(img);
    lightbox.style.display = 'flex';

    const closeButton = document.createElement('span');
    closeButton.classList.add('lightbox-close');
    closeButton.innerHTML = '&times;'; // Символ "крестик"
    lightbox.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
      lightbox.style.display = 'none';
      lightbox.innerHTML = ''; // Очищаем lightbox
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
    const teamLinks = document.querySelectorAll('.team-link');
    teamLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем переход по ссылке
            const masterId = this.getAttribute('data-master') + '-modal';
            const modal = document.getElementById(masterId);
            modal.style.display = 'block';
        });
    });

    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });

    // Закрытие модального окна при клике вне его области
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});
$(document).ready(function () {
    $('.portfolio-filters button').click(function () {
        var filter = $(this).data('filter');
        $('.portfolio-filters button').removeClass('active');
        $(this).addClass('active');

        if (filter === 'all') {
            $('.portfolio-item').show();
        } else {
            $('.portfolio-item').hide();
            $('.portfolio-item[data-style="' + filter + '"]').show();
        }
    });

    $('.portfolio-grid').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]'); // Выбираем все ссылки, начинающиеся с #
  
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки
  
        const targetId = this.getAttribute('href'); // Получаем id целевого элемента
        const targetElement = document.querySelector(targetId); // Находим целевой элемент
  
        if (targetElement) {
          // Используем метод scrollIntoView для плавной прокрутки
          targetElement.scrollIntoView({
            behavior: 'smooth', // Включаем плавную прокрутку
            block: 'start'      // Прокручиваем до начала элемента
          });
        }
      });
    });
  });