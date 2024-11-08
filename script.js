const app1 = {
    data() {
        return {
            contactos: [],
            nuevoNombre: '',
            nuevoTelefono: '',
            nuevaCategoria: '',
            nuevosMensajes: 0,
            nuevasLlamadas: 0,
        };
    },

    methods: {
        agregarNuevoContacto() {
            if (this.nuevoNombre.trim() && this.nuevoTelefono.trim() && this.nuevaCategoria.trim()) {
                this.contactos.push({
                    nombre: this.nuevoNombre.trim(),
                    telefono: this.nuevoTelefono.trim(),
                    categoria: this.nuevaCategoria.trim(),
                    mensajes: this.nuevosMensajes || 0,
                    llamadas: this.nuevasLlamadas || 0
                });

                this.nuevoNombre = '';
                this.nuevoTelefono = '';
                this.nuevaCategoria = '';
                this.nuevosMensajes = 0;
                this.nuevasLlamadas = 0;
            } else {
                alert("Completa todos los campos.");
            }
        },

        eliminarContacto(index) {
            this.contactos.splice(index, 1);
        },

        validarMensajes() {
            if (this.nuevosMensajes < 0) this.nuevosMensajes = 0;
            if (this.nuevosMensajes > 25) this.nuevosMensajes = 25;
        },

        validarLlamadas() {
            if (this.nuevasLlamadas < 0) this.nuevasLlamadas = 0;
            if (this.nuevasLlamadas > 15) this.nuevasLlamadas = 15;
        }
    },

    computed: {
        totalMensajes() {
            return this.contactos.reduce((sum, contacto) => sum + contacto.mensajes, 0);
        },
        totalLlamadas() {
            return this.contactos.reduce((sum, contacto) => sum + contacto.llamadas, 0);
        }
    }
};

const apli2 = Vue.createApp(app1).mount('#seccion');
