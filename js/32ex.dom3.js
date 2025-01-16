// const kim = {
//     number : 1,
//     name : 김시윤,
//     age : 25,
//     height : 167,
//     getNumber : function(){
//         return this.number;
//     },
//     getName : function(){
//         return this.name;
//     },
//     getAge : function(){
//         return this.age;
//     },
//     getHeight : function(){
//         return this.height;
//     }
// };
document.querySelector('button').addEventListener('click', e=>{
    const table = document.createElement('table');
    table.innerHTML = `<thead>
            <tr>
                <td>번호</td>
                <td>성명</td>
                <td>나이</td>
                <td>키</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>김시윤</td>
                <td>25</td>
                <td>167</td>
            </tr>
            <tr>
                <td>2</td>
                <td>귤락</td>
                <td>19</td>
                <td>155</td>
            </tr>
        </tbody>`;
        document.body.appendChild(table);
})


