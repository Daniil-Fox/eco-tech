import { validateForms } from "./../functions/validate-forms.js";
const checks = [
  {
    selector: ".checkbox-group",
    errorMessage: "Выберите чекбоксы",
  },
];
const rules1 = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 2,
        errorMessage: "Минимальная длина 2",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон",
      },
    ],
  },
];
const rules2 = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 2,
        errorMessage: "Минимальная длина 2",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон",
      },
    ],
  },
  {
    ruleSelector: ".input-email",
    rules: [
      {
        rule: "email",
        errorMessage: "Введите корректный Email",
      },
      {
        rule: "required",
        errorMessage: "Заполните Email",
      },
    ],
  },
];

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

if (document.querySelector(".cta__form")) {
  validateForms(".cta__form", rules1, [], afterForm);
}

if (document.querySelector(".popup-form")) {
  validateForms(".popup-form", rules2, [], afterForm);
}
