<template>
    <footer class="footer">
        <div class="footer__wrapper">
            <div class="footer__info">
                <p class="footer__author">
                    by Исмаилова Айзирек Асылбековна
                </p>
                <p class="footer__org">
                    Московский политехнический университет
                </p>
            </div>
        </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .footer__wrapper {
        max-width: 1440px;
        margin: 0 auto;
        padding: 30px 20px;
    }

    .footer__info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer__author {
        font-weight: 500;
    }
  </style>
  