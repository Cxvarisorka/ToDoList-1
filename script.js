const input = document.getElementById('task-input');

const itemsContainer = document.getElementById('items-list');

const addItemBtn = document.getElementById('add-btn');
const checkItemsBtn = document.getElementsByClassName('check');


const allItems = []

addItemBtn.addEventListener('click',function(e){
    e.preventDefault();

    if(input.value !== ''){
        const textFromInput = input.value;

        input.value = '';

        console.log(textFromInput.length)

        if(textFromInput.length > 25){
            alert('Task is too long.');
        } else{

            const html = `
            <div class="item">

                <div>
                    <div id="check"><i class="fa-solid fa-check"></i></div>
                    <p class="item-text">${textFromInput}</p>
                </div>

                <button class="delete"><i class="fa-solid fa-xmark"></i></button>
            </div>
            `

            allItems.push(html);

            if(allItems.length >= 7){
                itemsContainer.style.overflowY = 'scroll';
            } else{
                itemsContainer.style.overflowY = 'initial';
            }

            itemsContainer.insertAdjacentHTML('afterbegin',html);

            // After adding elements get delete btns

            const deleteItemsBtn = [...document.getElementsByClassName('delete')];
                
            deleteItemsBtn.forEach(function(btn){
                btn.addEventListener('click',function(e){
                    e.preventDefault();
                    this.parentNode.remove();
                    allItems.pop()
                });
            });

            const checkItemsBtn = document.getElementById('check');

            checkItemsBtn.style.backgroundColor = 'white'

            checkItemsBtn.addEventListener('click',function(e){
                e.preventDefault();

                if(this.style.backgroundColor == 'white'){
                    this.style.backgroundColor = 'green';
                } else{
                    this.style.backgroundColor = 'white';
                }
                this.nextSibling.nextElementSibling.classList.toggle('crossed');

            });
        }

        

    } else{
        alert('Please Enter Valid Task');
    }
});
