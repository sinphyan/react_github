import React, { Component } from 'react';
import Item_01 from './Item_01';

class List_01 extends Component {
    render(){
        return(
            <ol>
                <Item_01 text="測試內容文字" price={100} /> 
                <Item_01 text="自己找到bug或解決辦法" price="這是字串：100"/>
                <Item_01 text="很開心"/>

                {
                /* 
                <Item_01>測試內容文字</Item_01>
                <Item_01>自己找到bug或解決辦法</Item_01>
                <Item_01>很開心</Item_01> 
                
                >假設寫法變成一般html的寫法，就要再下組件裡面的this.props.(寫出:children)
                他就可以讀出這段文字
                */
                }
            </ol>
        )
    }
}

export default List_01;