function Validator(options) {
  var selectorRule = {};
  var formIsvalid = false;

  function validate(inputElement, rule) {
    var errorMessage;
    var errorElement = inputElement.parentElement.querySelector(
      options.errorSelector,
    );

    var rules = selectorRule[rule.selector];

    for (var i = 0; i < rules.length; ++i) {
      errorMessage = rules[i](inputElement.value);
      if (errorMessage) {
        break;
      }
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add('invalid');
    } else {
      errorElement.innerText = '';
      inputElement.parentElement.classList.remove('invalid');
    }
    return !errorMessage
  }


  var formElement = document.querySelector(options.form);
  if (formElement) {
    formElement.onsubmit = function (e) {
      formIsvalid = true;
      const selectors = new Set();
      e.preventDefault();
      options.rules.forEach((rule) => {
          selectors.add(rule.selector);
          var inputElement = formElement.querySelector(rule.selector);
          let isValid = validate(inputElement, rule);
          if (!isValid) {
              formIsvalid = false;
            }
        });
        if(formIsvalid){
        options.onSubmit();
      }
    };
    options.rules.forEach((rule) => {
      if (Array.isArray((selectorRule[rule.selector] = rule.test))) {
        selectorRule[rule.selector].push(rule.test);
      } else {
        selectorRule[rule.selector] = [rule.test];
      }

      var inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        inputElement.oninput = function () {
          var errorElement = inputElement.parentElement.querySelector(
            options.errorSelector,
          );
          errorElement.innerText = '';
          inputElement.parentElement.classList.remove('invalid');
        };
      }
    });
  }
}

Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : 'Vui lòng nhập trường này !';
    },
  };
};

Validator.minLength = function (selector, max, mes) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= max
        ? undefined
        : mes || `Vui lòng nhập trên ${max} kí tự !!!`;
    },
  };
};

Validator.isAge = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value >= 1 && value <= 120
        ? undefined
        : 'Tuổi không nhỏ hơn 1 và không lớn hơn 120';
    },
  };
};

export default Validator;
