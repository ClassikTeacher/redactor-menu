import api from '../http'


export default class MenuService {
    static fetchMenu(){
        return api.get('/menu')
    }

    static createCategory(name){
        return api.post('/category', {name})
    }

    static updateCategory(id, category){
        return api.put('/category/' + id, category)
    }

    static deleteCategory(id){
        
        return api.delete('/category/' + id)
    }

    static getMenuItem(id){
        return api.get('/menuitem/' + id)
    }

    static createMenuItem(name, description, category_id, price, pic){
        return api.post('/menuitem', {name, description, category_id, price, pic})
    }

    static updateMenuItem(id, name, description, category_id, price, pic){
        return api.put('/menuitem/' + id, {name, description, category_id, price, pic})
    }

    static deleteMenuItem(id){
        console.log(id)
        return api.delete('/menuitem/' + id)
    }

    static async addMenuPicter(file){
        const formData = new FormData()
        formData.append('file', file)
        return await api.post('/menuitem/picter', formData, {headers: {
            'Content-Type': 'multipart/form-data'}
        })
    }

    static updateMenuPicter(id, file){
        const formData = new FormData()
        formData.append('file', file)
        return api.put('/menuitem/picter/' + id, formData, {headers: {
            'Content-Type': 'multipart/form-data'}
        })
    }
    static deleteLocalPicter(path){
        console.log(path)
       
        return api.delete('/picter',{ data:{
            path: path
        }}
        )
    }
    static deleteMenuPicter(id){
        return api.delete('/menuitem/picter/' + id)
    }

}