import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import qs from 'qs'
// import { Formik } from 'formik'
import './ProductAdd.css'
import axios from 'axios'
import { List } from 'immutable'
function ProductAdd() {

    const [validated, setValidated] = useState(false);
    const [productNameKo, setProductNameKo] = useState('1');
    const [productNameEn, setProductNameEn] = useState('2');
    const [category, setCategory] = useState('2');
    const [nationCode, setNationCode] = useState('2');
    const [tags, setTags] = useState(List([1, 2]).toArray().toString());
    const [substitude, setSubstitude] = useState([1, 2].toString());
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(false);
        let fData2 = {
            productNameKo,
            productNameEn,
            category,
            tags,
            nationCode,
            substitude

        }
        // console.log(fData2, substitude, tags)
        axios.post('/api/todo', qs.stringify(fData2))
            .then(res => {
                console.log('res.data', res.data);
            }).catch(res => {
                console.error(res);
            })
    }

    return (
        <div className="container-wrapper" >
            <Form noValidate validated={validated} className="forms" onSubmit={handleSubmit} >
                <Form.Group controlId="forms.ControlInput1">
                    <Form.Label>제품명(Korean)</Form.Label>
                    <Form.Control type="input" placeholder="유니클로" required value={productNameKo} onChange={(e) => setProductNameKo(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="forms.ControlInput2">
                    <Form.Label>제품명(English)</Form.Label>
                    <Form.Control type="input" placeholder="Uniqulo" required value={productNameEn} onChange={(e) => setProductNameEn(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1" value={category} onChange={(e) => { setCategory(e.target.value) }}>
                    <Form.Label>카테고리</Form.Label>
                    <Form.Control as="select" >
                        <option value="123">패션</option>
                        <option value="124">음식</option>
                        <option value="256">화장품</option>
                        <option value="125">생활/잡화</option>
                        <option value="167">가전제품</option>
                        <option>의약품</option>
                        <option>취미</option>
                        <option>자동차</option>
                        <option>금융</option>
                        <option>기타</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1" value={nationCode} onChange={(e) => { setNationCode(e.target.value) }}>
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
                    <Form.Control type="input" placeholder="스파오,탑텐,지오다노" required value={substitude} onChange={(e) => { setSubstitude(e.target.value) }} />
                </Form.Group>
                <Form.Group controlId="forms.ControlInput4">
                    <Form.Label>태그 - 구분자(',')</Form.Label>
                    <Form.Control type="input" placeholder="#의류,#쇼핑,#극우" required value={tags} onChange={(e) => { setTags(e.target.value) }} />
                </Form.Group>
                <Button className="submitBtn" variant="primary" type="submit" >
                    Submit
              </Button>

            </Form>
        </div>
    )
}
export default ProductAdd