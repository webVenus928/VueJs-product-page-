'use strict';

window.addEventListener("load", function () {


    let tabs = (parentDiv, trigger, tbPane) => {
        let myTabs = document.querySelectorAll(`${parentDiv} ${trigger}`);
        function myTabClicks(tabClickEvent) {
            for (let i = 0; i < myTabs.length; i++) {
                myTabs[i].classList.remove("active");
            }
            let clickedTab = tabClickEvent.currentTarget;
            clickedTab.classList.add("active");
            tabClickEvent.preventDefault();
            let myContentPanes = document.querySelectorAll(tbPane);
            for (let i = 0; i < myContentPanes.length; i++) {
                myContentPanes[i].classList.remove("active");
            }
            let anchorReference = tabClickEvent.target;
            let activePaneId = anchorReference.getAttribute("href");
            let activePane = document.querySelector(activePaneId);
            activePane.classList.add("active");
        }
        for (let i = 0; i < myTabs.length; i++) {
            myTabs[i].addEventListener("click", myTabClicks)
        }
    }

    // For Tabs 
    tabs('#c-tab', '.tab-trigger li', '.tb-pane');

    // For Product Slider 
    tabs('#product-slider', '.product-slider-nav li', '.slide-item');


    // Script For Feature Selection 

    // DOM Elements: Id name, Id, class Nmae, class 
    let features = {
        colorChoice: '#colorChoice',
        serviceTime: '#serviceTime',
        controlOption: '#controlOption',
        selectItem: '.cmn-ct-wrapper',
        defaultOne: 'default-one',
        defaultTwo: 'default-Two',
        addAmount: 'add-amount',
        addAmountTwo: 'add-amount-two',
        price: '.extra-price-amount',
        defaultPrice: 295.5,
        data: {
            typeOne: 0,
            typeTwo: 0
        },
        totalPrice: function () {
            return this.data.typeOne + this.data.typeTwo;
        },
        finalPrice: '#final-price',

    }



    function selectedItem(items) {
        let allItem = document.querySelectorAll(items);
        allItem.forEach(each => {
            each.addEventListener('click', function () {
                allItem.forEach(each => {
                    each.classList.remove('active');
                })
                this.classList.add('active');

                if (this.id === features.addAmount) {
                    let priceValue = document.querySelector(`#${this.id} ${features.price}`).textContent;
                    features.data.typeOne = parseInt(priceValue);
                }
                else if (this.id === features.defaultOne) {
                    features.data.typeOne = 0;
                    features.data.typeTwo = features.defaultPrice;
                }

                else if (this.id === features.addAmountTwo) {
                    let priceValue = document.querySelector(`#${this.id} ${features.price}`).textContent;
                    features.data.typeTwo = parseInt(priceValue);
                }
                else if (this.id === features.defaultTwo) {
                    features.data.typeOne = features.defaultPrice;
                    features.data.typeTwo = 0;
                }



                document.querySelector(features.finalPrice).textContent = features.totalPrice();

            })
        })
    }

    selectedItem(`${features.colorChoice} ${features.selectItem}`);
    selectedItem(`${features.serviceTime} ${features.selectItem}`);
    selectedItem(`${features.controlOption} ${features.selectItem}`);


});




