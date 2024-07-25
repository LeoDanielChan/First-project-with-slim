<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model as Eloquent;

//creamos la clase del modelo y heredamos las propiedades de la clase Modelo
class Proveedores extends Eloquent{
    protected $table = "proveedores"; //nombre de la tabla 
    protected $fillable = [
        "id_forma_de_pago","nombre","servicio","contacto","logo" //campos de la tabla
    ];

    protected $primaryKey = "id_proveedor";
    public $timestamps = [];
    
}

?>