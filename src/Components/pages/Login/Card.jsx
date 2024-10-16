import { Card, Container, Button, Form } from "react-bootstrap";

export const CardContainer = ({ header, content }) => (
  <Container className="d-flex align-items-center justify-content-center">
    <Card style={{ width: "20rem" }}>
      <Card.Header className="fw-bold">{header}</Card.Header>
      <Card.Body>{content}</Card.Body>
    </Card>
  </Container>
);

export const AccountContainer = ({
  inputLabel,
  placeholderText,
  buttonLabel,
  onClick,
  setInput,
  input,
  showError,
  errorText,
}) => {
  return (
    <CardContainer
      header="Welcome To Space Traders"
      content={
        <Form>
          <Form.Group>
            <Form.Label>{inputLabel}</Form.Label>
            <Form.Control
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className={showError && "is-invalid"}
              value={input}
              placeholder={placeholderText}
            />
            {showError && (
              <Form.Label className="invalid-feedback">{errorText}</Form.Label>
            )}
          </Form.Group>
          <Button className="w-100 my-3" variant="primary" onClick={onClick}>
            {buttonLabel}
          </Button>
        </Form>
      }
    ></CardContainer>
  );
};
