<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model as Eloquent;

//creamos la clase del modelo y heredamos las propiedades de la clase Modelo
class Formularios extends Eloquent{
    protected $table = "formularios"; //nombre de la tabla 
    protected $fillable = [
        "fecha","involucrados","motivo","descripcion" //campos de la tabla
    ];

    protected $primaryKey = "id_formulario";
    public $timestamps = [];
    
}

?>