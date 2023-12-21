import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISOformlenie_i_vypolnenie_zakazaВНаличииLForm from './forms/i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии-l';
import IISOformlenie_i_vypolnenie_zakazaЗаказыLForm from './forms/i-i-s-oformlenie-i-vypolnenie-zakaza-заказы-l';
import IISOformlenie_i_vypolnenie_zakazaКонтрагентLForm from './forms/i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент-l';
import IISOformlenie_i_vypolnenie_zakazaМестоВыдачиLForm from './forms/i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи-l';
import IISOformlenie_i_vypolnenie_zakazaОповещенияLForm from './forms/i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения-l';
import IISOformlenie_i_vypolnenie_zakazaПродавецLForm from './forms/i-i-s-oformlenie-i-vypolnenie-zakaza-продавец-l';
import IISOformlenie_i_vypolnenie_zakazaТоварыLForm from './forms/i-i-s-oformlenie-i-vypolnenie-zakaza-товары-l';
import IISOformlenie_i_vypolnenie_zakazaВНаличииEForm from './forms/i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии-e';
import IISOformlenie_i_vypolnenie_zakazaЗаказыEForm from './forms/i-i-s-oformlenie-i-vypolnenie-zakaza-заказы-e';
import IISOformlenie_i_vypolnenie_zakazaКонтрагентEForm from './forms/i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент-e';
import IISOformlenie_i_vypolnenie_zakazaМестоВыдачиEForm from './forms/i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи-e';
import IISOformlenie_i_vypolnenie_zakazaОповещенияEForm from './forms/i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения-e';
import IISOformlenie_i_vypolnenie_zakazaПродавецEForm from './forms/i-i-s-oformlenie-i-vypolnenie-zakaza-продавец-e';
import IISOformlenie_i_vypolnenie_zakazaТоварыEForm from './forms/i-i-s-oformlenie-i-vypolnenie-zakaza-товары-e';
import IISOformlenie_i_vypolnenie_zakazaВНаличииModel from './models/i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии';
import IISOformlenie_i_vypolnenie_zakazaЗаказыModel from './models/i-i-s-oformlenie-i-vypolnenie-zakaza-заказы';
import IISOformlenie_i_vypolnenie_zakazaКонтрагентModel from './models/i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент';
import IISOformlenie_i_vypolnenie_zakazaМестоВыдачиModel from './models/i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи';
import IISOformlenie_i_vypolnenie_zakazaОповещенияModel from './models/i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения';
import IISOformlenie_i_vypolnenie_zakazaПродавецModel from './models/i-i-s-oformlenie-i-vypolnenie-zakaza-продавец';
import IISOformlenie_i_vypolnenie_zakazaСоставЗаказаModel from './models/i-i-s-oformlenie-i-vypolnenie-zakaza-состав-заказа';
import IISOformlenie_i_vypolnenie_zakazaТоварыModel from './models/i-i-s-oformlenie-i-vypolnenie-zakaza-товары';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии': IISOformlenie_i_vypolnenie_zakazaВНаличииModel,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-заказы': IISOformlenie_i_vypolnenie_zakazaЗаказыModel,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент': IISOformlenie_i_vypolnenie_zakazaКонтрагентModel,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи': IISOformlenie_i_vypolnenie_zakazaМестоВыдачиModel,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения': IISOformlenie_i_vypolnenie_zakazaОповещенияModel,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-продавец': IISOformlenie_i_vypolnenie_zakazaПродавецModel,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-состав-заказа': IISOformlenie_i_vypolnenie_zakazaСоставЗаказаModel,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-товары': IISOformlenie_i_vypolnenie_zakazaТоварыModel
  },

  'application-name': 'Oformlenie_i_vypolnenie_zakaza',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Oformlenie_i_vypolnenie_zakaza',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Oformlenie_i_vypolnenie_zakaza',
          title: 'Oformlenie_i_vypolnenie_zakaza'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        главная: {
          caption: 'Главная',
          title: 'Главная',
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии-l': {
              caption: 'В наличии',
              title: ''
            },
            'i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи-l': {
              caption: 'Место выдачи',
              title: ''
            },
            'i-i-s-oformlenie-i-vypolnenie-zakaza-товары-l': {
              caption: 'Товары',
              title: ''
            }
          },
          оповещение: {
            caption: 'Оповещение',
            title: 'Оповещение',
            'i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения-l': {
              caption: 'Оповещения',
              title: ''
            }
          },
          'оформление-заказа': {
            caption: 'Оформление заказа',
            title: 'Оформление заказа',
            'i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент-l': {
              caption: 'Контрагент',
              title: ''
            },
            'i-i-s-oformlenie-i-vypolnenie-zakaza-заказы-l': {
              caption: 'Заказы',
              title: ''
            },
            'i-i-s-oformlenie-i-vypolnenie-zakaza-продавец-l': {
              caption: 'Продавец',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии-l': IISOformlenie_i_vypolnenie_zakazaВНаличииLForm,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-заказы-l': IISOformlenie_i_vypolnenie_zakazaЗаказыLForm,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент-l': IISOformlenie_i_vypolnenie_zakazaКонтрагентLForm,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи-l': IISOformlenie_i_vypolnenie_zakazaМестоВыдачиLForm,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения-l': IISOformlenie_i_vypolnenie_zakazaОповещенияLForm,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-продавец-l': IISOformlenie_i_vypolnenie_zakazaПродавецLForm,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-товары-l': IISOformlenie_i_vypolnenie_zakazaТоварыLForm,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии-e': IISOformlenie_i_vypolnenie_zakazaВНаличииEForm,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-заказы-e': IISOformlenie_i_vypolnenie_zakazaЗаказыEForm,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент-e': IISOformlenie_i_vypolnenie_zakazaКонтрагентEForm,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи-e': IISOformlenie_i_vypolnenie_zakazaМестоВыдачиEForm,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения-e': IISOformlenie_i_vypolnenie_zakazaОповещенияEForm,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-продавец-e': IISOformlenie_i_vypolnenie_zakazaПродавецEForm,
    'i-i-s-oformlenie-i-vypolnenie-zakaza-товары-e': IISOformlenie_i_vypolnenie_zakazaТоварыEForm
  },

});

export default translations;
