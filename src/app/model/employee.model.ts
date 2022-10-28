export class Employee {
        id:number;
        preferredName:string;
        firstName:string;
        lastName:string;
        email:string;
        phoneNumber:string;
        skypeId:string;
        jobTitle:string;
        department:string;
        office:string;
        picture:string;
       
      
        constructor(id:number,firstname:string,lastname:string,preferredname:string,email:string,jobtitle:string,department:string,office:string,phonenumber:string,skypeid:string,picture:string) {
          this.id=id|| JSON.parse(window.localStorage.getItem("employees") || "[]").length+1;
          this.preferredName = preferredname;
          this.firstName = firstname;
          this.lastName = lastname;
          this.email = email;
          this.phoneNumber = phonenumber;
          this.skypeId = skypeid;
          this.jobTitle = jobtitle;
          this.department = department;
          this.office = office;
          this.picture = picture;
        }
        
      }

