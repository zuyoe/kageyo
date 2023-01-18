import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListMenuMenu from "./ListMenuMenu";
import ListReview from "./ListReview";
import StoreInfo from "./StoreInfo";

const ListMenu = () => {
  // 0은 List 메뉴
  // 1은 상세메뉴
  // 2는 정보메뉴
  const [showType, setShowType] = useState(0);
  useEffect(() => {}, [showType]);

  return (
    <div
      className="flex justify-between w-5/6 pt-6"
      style={{ margin: "0 auto" }}
    >
      <div className="w-4/6 m-5">
        <div className="flex justify-between h-40 shadow-md">

          <img src="photo/KFC_1.jpg" className="scale-75 ..." alt="이미지"></img>
          <div className="flex justify-center  flex-col py-4 w-3/4 ml-5 ">
            <div className="flex justify-center flex-col ">

              <span>★★★★☆4.8</span>
              <span>최소주문금액 11,000원</span>
              <span>결제 신용카드, 현금,JPay</span>
              <span>배달시간 40~50분</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-around m-5">
            <button
              onClick={() => setShowType(0)}
              type="button"
              className="inline-block px-6 py-2 border-2
           border-green-500 text-green-500 font-medium text-xs leading-tight 
           uppercase rounded-full hover:bg-green-500 hover:bg-opacity-4 hover:text-white focus:outline-none 
           focus:ring-0 transition duration-150 ease-in-out"
            >
              메 뉴
            </button>
            <button
              onClick={() => setShowType(1)}
              type="button"
              className="inline-block px-6 py-2 border-2
     border-red-600 text-red-600 font-medium text-xs leading-tight uppercase 
     rounded-full hover:bg-red-600 hover:bg-opacity-4  hover:text-white focus:outline-none focus:ring-0 
     transition duration-150 ease-in-out"
            >
              리 뷰
            </button>
            <button
              onClick={() => setShowType(2)}
              type="button"
              className="inline-block px-6 py-2 border-2
     border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase 
     rounded-full hover:bg-yellow-500 hover:bg-opacity-4  hover:text-white focus:outline-none focus:ring-0 
     transition duration-150 ease-in-out"
            >
              정 보
            </button>
          </div>

          <div>
            {showType === 0 && <ListMenuMenu />}
            {showType === 1 && <ListReview />}
            {showType === 2 && <StoreInfo />}
          </div>
        </div>
      </div>
      <div className=" w-2/6 pt-6 rounded-md">
        <div className="flex justify-center justify-content: center">
          <div className="block rounded-lg shadow-lg bg-white text-white max-w-sm text-center">
            <div className="py-3 px-6 rounded-md bg-red-500 ">주문표</div>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                주문표에 담긴 메뉴가 없습니다.
              </h5>
              <p className="text-gray-700 text-base mb-4"></p>
              <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                배달요금 3,000원 별도
              </div>
              <div className="py-3 px-6 border-t border-b border-gray-300 text-gray-600">
                합계: 21,200원
              </div>
            </div>
            HTML
            <Link to="/Buy">
              <button
                type="button"
                className="mb-2 w-full inline-block px-6 py-2.5
               bg-red-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md
                hover:bg-red-700 hover:shadow-lg
                 focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
               active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                주문하기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListMenu;
