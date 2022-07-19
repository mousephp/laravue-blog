// export default {
//     success : {
//         type: 'success', 
//         title: 'Tpack',
//         text: 'Thêm thành công!'
//     },
//     error : {
//         type: 'error', 
//         title: 'Tpack',
//         text: 'Thêm không thành công!'
//     }
// }


// var success =  [
//     'success', 
//     'Tpack',
//     'Thêm thành công!'
// ];












class Notification{

    success(){
        this.$notify({
            type: 'success', 
            title: 'notify',
            text: 'Something went wrong !'
        });
    }

    alert(){
        this.$notify({
            type:'alert',
            title: 'notify',
            text: 'Are you sure ?',
        });
    }

    error(){
        return this.$notify({
            type: 'error', 
            title: 'notify',
            text: 'Something went wrong !'
        });
    }

    warning(){
        this.$notify({
            type:'warning',
            title: 'notify',
            text: 'Oops! Wrong',
        });
    }
}

export default Notification = new Notification()
