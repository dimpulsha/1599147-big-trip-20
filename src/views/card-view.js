import View from './view.js';
import {html} from '../tools/utils.js';

class CardView extends View {

  /**
   * @override
   */
  createHtml() {
    return html`
      <div class="event">
        ${this.createStartDateHtml()}
        ${this.createEventTypeIconHtml()}
        ${this.createEventDestinationHtml()}
        ${this.createScheduleHtml()}
        ${this.createEventPriceHtml()}
        ${this.createSelectedOffersHtml()}
        ${this.createFavoriteButtonHtml()}
        ${this.createOpenCardButtonHtml()}
      </div>
    `;
  }

  /**
   * @return {SafeHtml}
   */
  createStartDateHtml() {
    return html`
      <time class="event__date" datetime="2019-03-18">MAR 18</time>
    `;
  }

  /**
   * @return {SafeHtml}
   */
  createEventTypeIconHtml() {
    return html`
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
      </div>
    `;
  }

  /**
   * @return {SafeHtml}
   */
  createEventDestinationHtml() {
    return html`<h3 class="event__title">Taxi Amsterdam</h3>`;
  }

  /**
   * @return {SafeHtml}
   */
  createScheduleHtml() {
    return html`
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
        </p>
        <p class="event__duration">30M</p>
      </div>
    `;
  }

  /**
   * @return {SafeHtml}
   */
  createEventPriceHtml() {
    return html`
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">20</span>
      </p>
    `;
  }

  /**
   * @return {SafeHtml}
   */
  createSelectedOffersHtml() {
    return html`
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <li class="event__offer">
          <span class="event__offer-title">Order Uber</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">20</span>
        </li>
      </ul>
    `;
  }

  /**
   * @return {SafeHtml}
   */
  createFavoriteButtonHtml() {
    return html`
      <button class="event__favorite-btn event__favorite-btn--active" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
    `;
  }

  /**
   * @return {SafeHtml}
   */
  createOpenCardButtonHtml() {
    return html`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `;
  }
}

customElements.define('card-view', CardView);

export default CardView;

