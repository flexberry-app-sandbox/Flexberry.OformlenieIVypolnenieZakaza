import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии-l');
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии-e',
  { path: 'i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии-e/:id' });
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии-e.new',
  { path: 'i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии-e/new' });
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-заказы-l');
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-заказы-e',
  { path: 'i-i-s-oformlenie-i-vypolnenie-zakaza-заказы-e/:id' });
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-заказы-e.new',
  { path: 'i-i-s-oformlenie-i-vypolnenie-zakaza-заказы-e/new' });
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент-l');
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент-e',
  { path: 'i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент-e/:id' });
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент-e.new',
  { path: 'i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент-e/new' });
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи-l');
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи-e',
  { path: 'i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи-e/:id' });
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи-e.new',
  { path: 'i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи-e/new' });
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения-l');
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения-e',
  { path: 'i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения-e/:id' });
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения-e.new',
  { path: 'i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения-e/new' });
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-продавец-l');
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-продавец-e',
  { path: 'i-i-s-oformlenie-i-vypolnenie-zakaza-продавец-e/:id' });
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-продавец-e.new',
  { path: 'i-i-s-oformlenie-i-vypolnenie-zakaza-продавец-e/new' });
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-товары-l');
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-товары-e',
  { path: 'i-i-s-oformlenie-i-vypolnenie-zakaza-товары-e/:id' });
  this.route('i-i-s-oformlenie-i-vypolnenie-zakaza-товары-e.new',
  { path: 'i-i-s-oformlenie-i-vypolnenie-zakaza-товары-e/new' });
});

export default Router;
