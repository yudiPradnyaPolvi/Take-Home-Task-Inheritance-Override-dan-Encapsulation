class database{
    nama
    nik
    jenisKelamin
    setNama (nama){
        this.nama=nama;
    }
    setNik (nik){
        this.nik=nik;
    }
    setjenisKelamin(jenisKelamin){
        this.jenisKelamin = jenisKelamin;
    }
    getNama (){
        return this.nama;
    }
    getNik (){
        return this.nik;
    }
    getjenisKelamin(){
        return this.jenisKelamin ;
    }


}




class Employee extends database{
    pekerjaan
    salary
    
    setPekerjaan (pekerjaan){
        this.pekerjaan=pekerjaan;
    }
    setSalary (salary){
        this.salary=salary;
    }
    getPekerjaan (){
        return this.pekerjaan;
    }
    getSalary (){
        return this.salary;
    }
}

class Student extends database{
    kampus
    jurusan
    
    setKampus (kampus){
        this.kampus=kampus;
    }
    setJurusan (jurusan){
        this.jurusan=jurusan;
    }
    
    getKampus (){
        return this.kampus;
    }
    getJurusan (){
        return this.jurusan;
    }

}


const databases= new database();
const Employees = new Employee ();
const Students = new Student ();
databases.getNama();
databases .getNik();
databases.getjenisKelamin();
Employees .getNama();
Employees .getNik();
Employees .getjenisKelamin();
Students.getNama()
Students.getNik()
Students.getjenisKelamin()


databases.setNama ("Yudi");
databases.setNik (140013221313)
databases.setjenisKelamin ("laki-laki")
Employees.setPekerjaan ("Programmer")
Employees.setSalary (100000000)
Students.setJurusan ("Teknik ELektro");
Students.setKampus ("universitas Udayana")

console.log ("Nama : "+databases.getNama())
console.log("Nik : "+databases.getNik())
console.log ("Jenis Kelamin : "+databases.getjenisKelamin())

console.log ("Pekerjaan: "+ Employees.getPekerjaan())
console.log("Salary : "+Employees.getSalary())
console.log ("Kampus : "+Students.getKampus())
console.log ("Jurusan : "+Students.getJurusan())




