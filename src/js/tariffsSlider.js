import { Swiper } from 'swiper';
import { IS_MOBILE } from './utils';

export default function tariffsSlider() {
    if (IS_MOBILE) return;
    const elements = Array.from(document.querySelectorAll('.js-tariffs-slider'));

    function initializeSlider(element) {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto'
        });
    }

    elements.forEach(element => {
        initializeSlider(element);
    });

    function initializeACFSlider($block) {
        console.log('Native slider element', $block[0]);
        initializeSlider($block[0]);
    }

    if (window.acf) {
        window.acf.addAction('render_block_preview/type=tariffs', initializeACFSlider);
    }
}
