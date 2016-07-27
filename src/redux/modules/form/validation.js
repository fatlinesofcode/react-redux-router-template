//http://davidspiess.name/2015/cleaner-redux-form-validation-with-validatorjs/
//https://github.com/skaterdav85/validatorjs
import Validator from 'validatorjs';

Validator.register('telephone', function(value, requirement, attribute) { // requirement parameter defaults to null
    return value.match(/^\d{3}-\d{3}-\d{4}$/);
}, 'The :attribute phone number is not in the format XXX-XXX-XXXX.');

Validator.register('alpha_num_dash_space', function(value, requirement, attribute) { // requirement parameter defaults to null
    return value.match(/^[a-zA-Z0-9_\-\s]+$/);
}, 'The :attribute can only contain letters, numbers, spaces or dashes.');

export function validateFormValues(languageObj={"title":{"rule":"required"}}) {
    let rules = {};
    for(let i in languageObj){
        if(languageObj[i].rule)
            rules[i] = languageObj[i].rule;
    }
    return (values) => {
        // return {};
        let valuerules = {};
        let keys = Object.keys(values);
        for(let i in keys){
            let key = keys[i];
            valuerules[key] = rules[key];
        }
        const validator = new Validator(values, valuerules);
        validator.passes();
        let errors =  validator.errors.all();

        return errors;
    }
}

export function validateFormErrorText(props){
    let {error, language, touched} = props;
    if(touched){
        if(error){
            if(language.error)return language.error;
            else if(Array.isArray(error)) return error[0];
            else true;
        }
    }
    return null;
    // return touched ? error ? language.error ? language.error : Array.isArray(error) ? error[0] : true: null : null;
}