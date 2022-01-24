// Descrizione:
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

new Vue ({
    el: "#app",
    data: {
        listMail: [],
    },

    methods: {
      emailGenerator: function(num) {
        for(i=0;i < num;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
            this.listMail.push(email.data.response)
            })
            }
        },
            
        
    }

      
    
})