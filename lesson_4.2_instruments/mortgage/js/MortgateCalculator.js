const { Button, Inputs, Form } = window['antd'];
const FormItem = Form.Item;
const MortgateCalculator = () => (
  <div>
    <Form className="select-form" action="">
      <FormItem>
        <Autocomplete />
      </FormItem>
      <FormItem>
        <Input />
      </FormItem>
      <FormItem>
        <Button type="primary">Отправить</Button>
      </FormItem>
    </Form>
  </div>
);
