import Form from 'react-bootstrap/Form';
import File from './File';
import Button from 'react-bootstrap/Button';


function Fileform() {
  return (
    <Form><File/>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>제목</Form.Label>
        <Form.Control type="email" placeholder=" " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>리뷰쓰기</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Button variant="primary">저장</Button>{' '}
        <Button variant="primary">수정</Button>{' '}
        <Button variant="primary">삭제</Button>{' '}
      </Form.Group>
    </Form>
  );
}

export default Fileform;