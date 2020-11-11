import React, { Component } from "react";
import Background from "../components/Background";
 
import "../components/Home.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Background />
        <div className="text-wrapper">
          <div className="text">
            <div>
              <h1>تولیدی آباژور آفتاب</h1>
              <div className="texP">
                <p>تولیدی آباژور آفتاب با بیش از ۲۰ سال ثابقه برای ارائه خدمات ذیل در خدمت شماست 
تولید انوع آباژور های رومیزی و کنارسالنی در انواع مدل و رنگ دلخواه شما 
تولید انواع کلاهک ها در انواع رنگ و مدل های متنوع دلخواه شما 
مناسب با رنگ مبلمان آباژور های دوقلو ، تکی ،شمعدانی برنز،میوه خوری برنز ، شکلات خوری برنز ، شیرینی‌خوری برنز و ... 
ارسال به تمام نقاط کشور 
جهیزیه عروستان را با ما تزئین کنید</p>
    
                <p><a href="/contact">برای سفارش مدل دلخواهتوان یا سفارش مدل های حاضری با ما در ارتباط باشید</a></p>
              </div>
            </div>
          </div>
        </div>
        <center><hr /></center>
     
      </div>
    );
  }
}
