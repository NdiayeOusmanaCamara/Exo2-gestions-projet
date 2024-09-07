// gestionProjet.js

export class Employe {
    constructor() {}

    createEmploye(employe) {
        this.id = employe.id;
        this.nom = employe.nom;
        this.prenom = employe.prenom;
        this.email = employe.email;
        this.poste = employe.poste;
        this.dateEmbauche = employe.dateEmbauche;
        this.statut = employe.statut;
        console.log(`Employé ${this.nom} ${this.prenom} créé avec l'email ${this.email}`);
    }

    getEmploye() {
        console.log(`Employé: ${this.nom}, ${this.prenom}`);
        return {
            id: this.id,
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
            poste: this.poste,
            dateEmbauche: this.dateEmbauche,
            statut: this.statut
        };
    }

    editEmploye(newEmploye) {
        this.id = newEmploye.id;
        this.nom = newEmploye.nom;
        this.prenom = newEmploye.prenom;
        this.email = newEmploye.email;
        this.poste = newEmploye.poste;
        this.dateEmbauche = newEmploye.dateEmbauche;
        this.statut = newEmploye.statut;
        console.log(`Employé avec l'id ${this.id} mis à jour :`, this);
    }

    destroyEmploye() {
        console.log(`Employé ${this.nom} ${this.prenom} supprimé.`);
    }
}

export class Tache {
    constructor() {}

    createTache(tache) {
        this.nom = tache.nom;
        this.description = tache.description;
        this.dateDebut = tache.dateDebut;
        this.dateFin = tache.dateFin;
        this.statut = tache.statut;
        this.priorite = tache.priorite;
        console.log(`Tâche ${this.nom} créée`);
    }

    getTache() {
        console.log(`Tâche: ${this.nom}`);
        return {
            nom: this.nom,
            description: this.description,
            dateDebut: this.dateDebut,
            dateFin: this.dateFin,
            statut: this.statut,
            priorite: this.priorite
        };
    }

    editTache(newTache) {
        this.nom = newTache.nom;
        this.description = newTache.description;
        this.dateDebut = newTache.dateDebut;
        this.dateFin = newTache.dateFin;
        this.statut = newTache.statut;
        this.priorite = newTache.priorite;
        console.log(`Tâche ${this.nom} mise à jour`);
    }

    destroyTache() {
        console.log(`Tâche ${this.nom} supprimée.`);
    }
    
};

// gestionAssignations.js
class Assignation {
    static #tabAssignations = [];
  
  
    static getTab(){
      return Assignation.#tabAssignations;
    }
    static assign({ employe, tache, dateAssignation }) {
      Assignation.#tabAssignations.push({ employe, tache, dateAssignation });
    }
  
    static dropAssign(employe) {
      if (employe) {
        Assignation.#tabAssignations = Assignation.#tabAssignations.filter(
          (emp) => {
            return emp.employe.nom !== employe.nom
          }
        );
      }
    }
  
    static getEmpAssign(employe) {
      console.log(`${employe} existe`)
      if (employe) {
        return Assignation.#tabAssignations
          .filter(emp => emp.employe.nom === employe.nom)
          .map(ass => {
            return {
              tache: ass.tache,
              dateAssignation: ass.dateAssignation,
            };
          });
      }
    }
  
    static getTacheAssign(tache) {
      if (tache) {
        Assignation.#tabAssignations = Assignation.#tabAssignations
          .filter((tsk) => tsk.tache === tache)
          .map((ass) => {
            return {
              employe: ass.employe
            };
          });
      }
    }
  }
  export { Assignation };
  