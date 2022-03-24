import { AjvError, IChangeEvent, ISubmitEvent } from "@rjsf/core";

export const onSubmit = (event: ISubmitEvent<unknown>) => {
    console.log("submit", event.formData);
  };

  export   const onChange = (event: IChangeEvent<unknown>) => {
    console.log("change", event.formData);
  };

  export const onError = (errors: AjvError[]) => {
    console.error(errors);
  };