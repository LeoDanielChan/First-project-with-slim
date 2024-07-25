<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model as Eloquent;

//creamos la clase del modelo y heredamos las propiedades de la clase Modelo
class Usuarios extends Eloquent{
    protected $table = "usuarios"; //nombre de la tabla 
    protected $fillable = [
        //campos de la tabla
        "id_tipo_de_usuario",
        "id_area",
        "nombre",
        "apellido_paterno",
        "apellido_materno",
        "name_user",
        "correo",
        "contraseña",
        "telefono",
        "puesto_de_trabajo"
    ];

    protected $primaryKey = "id_usuario";
    public $timestamps = [];
    
}

?>