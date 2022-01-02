import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import WYSIWYGEditor from './WYSIWYG';

const EmailTemplateForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post('/templates', data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Container fluid={true}>
        <Card className='mt-3'>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <CardTitle className='m-3'>Add Email Template</CardTitle>
            <CardBody>
              <Row>
                <Col xs={6}>
                  <FormGroup>
                    <Label>Title</Label>
                    <Controller
                      name='title'
                      control={control}
                      rules={{ required: 'Title is required' }}
                      render={({ field }) => (
                        <Input {...field} placeholder='Title' />
                      )}
                    />
                    <small className='text-danger'>
                      {errors.title && errors.title.message}
                    </small>
                  </FormGroup>
                </Col>
                <Col xs={6}>
                  <FormGroup>
                    <Label>Code</Label>
                    <Controller
                      name='code'
                      control={control}
                      rules={{ required: 'Code is required' }}
                      render={({ field }) => (
                        <Input {...field} placeholder='Code' />
                      )}
                    />
                    <small className='text-danger'>
                      {errors.code && errors.code.message}
                    </small>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col xs={6}>
                  <FormGroup>
                    <Label>From Name</Label>
                    <Controller
                      name='fromName'
                      rules={{ required: 'From Name is required' }}
                      control={control}
                      render={({ field }) => (
                        <Input {...field} placeholder='From Name' />
                      )}
                    />
                    <small className='text-danger'>
                      {errors.fromName && errors.fromName.message}
                    </small>
                  </FormGroup>
                </Col>
                <Col xs={6}>
                  <FormGroup>
                    <Label>From Email</Label>
                    <Controller
                      name='fromEmail'
                      control={control}
                      rules={{ required: 'From Email is required' }}
                      render={({ field, fieldState: { error } }) => (
                        <Input {...field} placeholder='From Email' />
                      )}
                    />
                    <small className='text-danger'>
                      {errors.fromEmail && errors.fromEmail.message}
                    </small>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <FormGroup>
                    <Label>Email Subject</Label>
                    <Controller
                      name='emailSubject'
                      control={control}
                      rules={{ required: 'Email Subject is required' }}
                      render={({ field }) => (
                        <Input {...field} placeholder='Email Subject' />
                      )}
                    />
                    <small className='text-danger'>
                      {errors.emailSubject && errors.emailSubject.message}
                    </small>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <FormGroup>
                  <Label>Description</Label>
                  <Controller
                    name='description'
                    control={control}
                    rules={{ required: 'Description is required' }}
                    render={({ field }) => <WYSIWYGEditor {...field} />}
                  />
                  <small className='text-danger'>
                    {errors.description && errors?.description.message}
                  </small>
                </FormGroup>
              </Row>
            </CardBody>
            <CardFooter>
              <Button type='submit' color='primary'>
                Submit
              </Button>
            </CardFooter>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default EmailTemplateForm;
