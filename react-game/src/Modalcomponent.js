//모달이란 웹페이지에서 특정 작업을 수행하기 위해 표시되는 작은 창
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//export default function Modalcomponent{}
//function Modalcomponent{}
//export const ModalComponent{}
const Modalcomponent = () => {
  //모달의 상태를 관리해줄 useState 훅 사용
  const [showModal, setShowModal] = useState(false);

  //모달을 열고닫는 함수를 표현
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      {/*모달을 열기위한 버튼을 생성해줄 예정 
    variante : 부트스트랩에서 버튼 등 다양한 요소에 스타일 변형을 주기위해 지정해주는 속성
    종류 : primary secondary success danger warning info light dark*/}
      <Button variant="primary" onClick={handleShow}>
        {/*모달열기*/}
      </Button>
      {/*모달 함수(컴포넌트) */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>모달 제목</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>안녕하세요 모달 바디입니다.</p>
          <p>000님이 요청하신 사항을 확인해주시길 바랍니다.</p>
          <ul>
            <li>샤워</li>
            <li>금연</li>
            <li>취사가능</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            닫기
          </button>
          <button variant="success" onClick={handleClose}>
            저장
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Modalcomponent;

/**import {Modal, Button} from 'react-bootstrap';
 * -> 부트스트랩 스타일을 아예 함수(컴포넌트)로 만들어서 제공해주는 것
 * import 'bootstrap/dist/css/bootstrap.min.css'; -> className에 bootstrap이 지정한 형식이 들어감
 * 예를 들어 className = "mt-5"
 */
