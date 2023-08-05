function Valdator(options) {

    var selectorRule = {}

  function validate(inputElement, rule) {
    var errorMessage ;
    var errorElement = inputElement.parentElement.querySelector(
      options.errorSelector,
    );

    //lấy ra các rule của selector
    var rules = selectorRule[rule.selector]

    //lặp qua tửng rule và kiểm tra
    //nếu có lỗi thì dừng viejc kiểm tra
    for(var i = 0; i < rules.length; ++i){
        errorMessage = rules[i](inputElement.value)
        if(errorMessage){
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
  }

  //lấy element của form cần validate
  var formElement = document.querySelector(options.form);
  if (formElement) {
    formElement.onsubmit = function(e){
        e.preventDefault();

        //lặp qua từng rule và validate
        options.rules.forEach((rule) => {
            var inputElement = formElement.querySelector(rule.selector);
            validate(inputElement, rule);
        });
    }
    options.rules.forEach((rule) => {

        //lưu lại rules cho mỗi input

        if(Array.isArray( selectorRule[rule.selector] = rule.test)){
            selectorRule[rule.selector].push(rule.test);
        }else{
            selectorRule[rule.selector] = [rule.test];
        }
       
      var inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        //xử lý trường hợp blur ra khỏi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        //xử lý mỗi khi người dùng nhập vào input
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

Valdator.isRequired = function (selector,) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : 'Vui lòng nhập trường này !';
    },
  };
};

Valdator.minLength = function (selector, max, mes) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= max ? undefined : mes|| `Vui lòng nhập trên ${max} kí tự !!!`;
    },
  };
};

Valdator.isAge = function (selector) {
    return {
      selector: selector,
      test: function (value) {
        return (value >=1 && value <= 120) ? undefined :  'Tuổi không nhỏ hơn 1 và không lớn hơn 120'; 
      }
    };
};

export default Valdator;
