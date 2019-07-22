import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import './ProductAdd.css'
function ProductAdd() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        console.log('asdasd')
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }
    return (
        <div className="container-wrapper" >
            <Form noValidate validated={validated} className="forms" onSubmit={handleSubmit}>
                <Form.Group controlId="forms.ControlInput1">
                    <Form.Label>제품명(Korean)</Form.Label>
                    <Form.Control type="input" placeholder="유니클로" required />
                </Form.Group>
                <Form.Group controlId="forms.ControlInput2">
                    <Form.Label>제품명(English)</Form.Label>
                    <Form.Control type="input" placeholder="Uniqulo" required />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>카테고리</Form.Label>
                    <Form.Control as="select">
                        <option>패션</option>
                        <option>음식</option>
                        <option>화장품</option>
                        <option>생활/잡화</option>
                        <option>가전제품</option>
                        <option>의약품</option>
                        <option>취미</option>
                        <option>자동차</option>
                        <option>금융</option>
                        <option>기타</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>국적</Form.Label>
                    <Form.Control as="select">
                        <option>일본</option>
                        <option>일본 포함 다국적</option>
                        <option>한국</option>
                        <option>기타</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="forms.ControlInput3">
                    <Form.Label>대체상품 - 구분자(',')</Form.Label>
                    <Form.Control type="input" placeholder="스파오,탑텐,지오다노" required />
                </Form.Group>
                <Form.Group controlId="forms.ControlInput4">
                    <Form.Label>태그 - 구분자(',')</Form.Label>
                    <Form.Control type="input" placeholder="#의류,#쇼핑,#극우" required />
                </Form.Group>
                <Button className="submitBtn" variant="primary" type="submit" >
                    Submit
              </Button>

            </Form>
        </div>
    )
}
export default ProductAdd