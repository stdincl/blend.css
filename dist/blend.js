HTMLSelectElement.prototype.blend = function(value){
    if(!this.blended){
        this.blended = true;
        this.addEventListener('change',function(e){
            var options = this.querySelectorAll('option');
            this.parentElement.querySelector('select + label').innerText = (
                (
                    this.selectedIndex>=0
                    &&
                    this.selectedIndex <= options.length-1
                )?
                this.querySelectorAll('option')[this.selectedIndex].innerText:
                ''
            );
        });
    }
    this.value = value?value:this.value;
    this.dispatchEvent(new Event('change'));
};
HTMLInputElement.prototype.blend = function(){
    if(!this.blended){
        this.blended = true;
        this.addEventListener('change',function(e){
            this.parentElement.querySelector('input[type=file] + label').innerText = (
                this.files[0]?
                this.files[0].name:
                ''
            );
        });
        this.dispatchEvent(new Event('change'));
    }
};
window.document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('bl-input > select').forEach((select)=>select.blend());
    document.querySelectorAll('bl-input > input[type=file]').forEach((input)=>input.blend());
});
