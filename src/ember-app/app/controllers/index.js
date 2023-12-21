import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.главная.caption'),
          title: i18n.t('forms.application.sitemap.главная.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.главная.справочники.caption'),
            title: i18n.t('forms.application.sitemap.главная.справочники.title'),
            children: [{
              link: 'i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии-l',
              caption: i18n.t('forms.application.sitemap.главная.справочники.i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.справочники.i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии-l.title'),
              icon: 'chart line',
              children: null
            }, {
              link: 'i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи-l',
              caption: i18n.t('forms.application.sitemap.главная.справочники.i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.справочники.i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи-l.title'),
              icon: 'edit',
              children: null
            }, {
              link: 'i-i-s-oformlenie-i-vypolnenie-zakaza-товары-l',
              caption: i18n.t('forms.application.sitemap.главная.справочники.i-i-s-oformlenie-i-vypolnenie-zakaza-товары-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.справочники.i-i-s-oformlenie-i-vypolnenie-zakaza-товары-l.title'),
              icon: 'phone',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.главная.оповещение.caption'),
            title: i18n.t('forms.application.sitemap.главная.оповещение.title'),
            children: [{
              link: 'i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения-l',
              caption: i18n.t('forms.application.sitemap.главная.оповещение.i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.оповещение.i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения-l.title'),
              icon: 'calendar',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.главная.оформление-заказа.caption'),
            title: i18n.t('forms.application.sitemap.главная.оформление-заказа.title'),
            children: [{
              link: 'i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент-l',
              caption: i18n.t('forms.application.sitemap.главная.оформление-заказа.i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.оформление-заказа.i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент-l.title'),
              icon: 'table',
              children: null
            }, {
              link: 'i-i-s-oformlenie-i-vypolnenie-zakaza-заказы-l',
              caption: i18n.t('forms.application.sitemap.главная.оформление-заказа.i-i-s-oformlenie-i-vypolnenie-zakaza-заказы-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.оформление-заказа.i-i-s-oformlenie-i-vypolnenie-zakaza-заказы-l.title'),
              icon: 'calendar',
              children: null
            }, {
              link: 'i-i-s-oformlenie-i-vypolnenie-zakaza-продавец-l',
              caption: i18n.t('forms.application.sitemap.главная.оформление-заказа.i-i-s-oformlenie-i-vypolnenie-zakaza-продавец-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.оформление-заказа.i-i-s-oformlenie-i-vypolnenie-zakaza-продавец-l.title'),
              icon: 'chart line',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})