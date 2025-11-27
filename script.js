
$(document).ready(function() {
    console.log('jQuery готов к работе!');
    $('body').css('background-color', '#f9f9f9');
});




$(document).on('click', '.tab-btn', function() {
    const target = $(this).data('tab');

    $('.tab-btn').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).addClass('active');
    $('#' + target).addClass('active');
});

// Vanilla JS версия
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const target = this.dataset.tab;

        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        this.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});



// jQuery версия
$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top - 80
        }, 600);
    }
});

// Vanilla JS версия (современный способ)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


$('#loadQuote').on('click', function() {
    $.get('https://api.quotable.io/random')
        .done(function(data) {
            $('#quote p').text(data.content);
            $('#quote cite').text('— ' + data.author);
        })
        .fail(function() {
            $('#quote p').text('Не удалось загрузить цитату :(');
        });
});

// Vanilla JS версия с fetch + async/await
document.getElementById('loadQuote').addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.querySelector('#quote p').textContent = data.content;
        document.querySelector('#quote cite').textContent = '— ' + data.author;
    } catch (err) {
        document.querySelector('#quote p').textContent = 'Не удалось загрузить цитату :(';
    }
});



$(function() {
    // Перетаскивание
    $('#draggable').draggable();

    // Календарь
    $('#datepicker').datepicker({
        dateFormat: 'dd.mm.yy',
        changeMonth: true,
        changeYear: true
    });
});

