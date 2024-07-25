
console.log('Sola')

var crearPdf = document.getElementById('prueba'),
    boton =document.getElementById('pdf');

// boton.onclick = 
function sola (id,motivo,descripcion,involucrados,fecha) {
    var doc = new jsPDF('p','pt','letter');
    var id = id.toString();
    var motivo = motivo.toString();
    var descripcion = descripcion.toString();
    var involucrados = involucrados.toString();
    var fecha = fecha. toString();
    console.log(id,motivo,descripcion,involucrados,fecha)
    var imgData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAABBCAYAAAB4ko6YAAAUIUlEQVR42u1dB1hVx7r9KWKlC4IgIhobooICihhQAZWiWOjSy6FX6dJFRJEido3GithivPFeNaaaXt7Tm9z70m6Kpr5YkxiJmnDXbA4K5+zDOYhi7nuzvm99nHP2ntmzZ6/55/9nZg9EHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwc/3+hoUlkZNqfzK1MyMzSUqD5CDMyGaZNfbSI1NR4HXH8iaGjRzR64kBynO1M0TkFlF1zglbu+gfVHvqG1jVfbuOh72n13o8pZ91ZSixZSy5e3jRmohGEz+uP40+Cfv2JZi+0oBUbcqn+6N+p4dhtajx+jVbve5+q9hyi1JUbKKWiEqwA66lix36q3nsO5/1A65/5HWm+opVP1ZFvxCTSG8zrk+MxwnqKLqVVLoeAv6GGoy1Uve95Kt++gtY2JVDx5hUQ9GYq2XIUPAu+AJ7AbzuoaFM5zkmG1c7C94NUf+QqbXj2JypY30hO7pakrs7rlqMXoa5B5LHEgdYceBVW9g8I8zjVNsdBnOVwKc7h+3WqO9wKd6NV+NuR7b+ta/6Vag6ep1W7G/A5DtyCRnETlvtzisz2o4HavJ45egH6cAsis/0h5MsQ5lcQYhpYDH4kiJVxXbPqbDv/B3AjGI3vr8Pi36H0qmIa/oQmr3CORyvm9CoJbTjxGwK8lyHAMPB0twTcNT8AJeBOiLqVSrfWQ9R9eMVzPHxowM2IzQ+AmO9AcCfBWPCzhyjmdt4A88F16AVa4XdXkZEpH+PjeMiY6+cAgV2F0F6W+rzfKXcn4CvXHwWPdFfUt8ACwa9mljq2IJK0+vJnwPGQMN5Oj9bsf5PqjnwldTM+V+oXNxxrQZqXKb9hJ1yHo2gMn0Hcv3dD1DdBNhJyBqK+THN8bfiD4Og5+vYjylidJ3T/65pTwBeUinlt07cUkbWALEf3FdIz39vF24QSit0g6jI0jHcRUN5RQdQXhQZUf+QyVTz1DJlZ8iCRo4eY4zsCYv4RwjoKVigVIRN+Tm0z9e3fOR82DJddMx1uyG6I8xxV7f4XrT92V4VRkSNgmZBvSrmXMKXOwfFA0DUgKtpcSg1HbwlDauuav+xSfMzNqNq9GyJ9l5znWnfKa8AgNZrqMpqesBlFeoYGCPSMaEmMJ9yS15SIugVMhEX/iNYeOEWWYzT4g+F4MEyargP/9ROq3vcXCK+6Szej8fj3cCnCydxKjeIK6yijqoY0uxhxG2yiTeYjLGhxlAPE+jzy6cq/PgGuxjVuoxHYdrWwSU1dndQ1NPBHg3pEDQ1cRk0gvquDarLHVQE7TyR/deSL/NR7XEa5+2flbbumWk/vvSv06dOHDI2M+xsNMdEbbGyirwqNhpjq6ekbaLFrPB44z/OQjgdnQ9Tvi1rStt/OkXeII/Ub0JZuQagjVe76Gw3U6Sear5GJOhVviYNv/ArVNLEFTP+DPG53IehrYDx6gJ/hzxd1NTXuOHOWd1BU/Bn/sJjTPWFwVPwJ60lTn8CD0AqKTNjmHxZ7tuPxgAjJ6fm+fon9BwwULYeWlhbN8VzoHxghOSWT9/Mh0YnNw61G6c9wdXcMipQ8aBlPBYTH7lvgF5IxdsIkq/brjhlvMwL3fwzHe1AHsccWB0eUjbOZbK0h02ggYN35i/wjcY0DkvS8N+IzCy7EZ+arwr/j3PPRyctfCQiP2zJzzlxPHV29XlQ281UlhWsg6P+FmJOkQ2kyQhMscwtEuZ5sHIZ28LtN4R+/RCPHDRHNm1lucystmuFhTIklvsj/JYhVmS9djgbwKhU2vgp/XKGiPXwWZ2QUVbam5Jb2iJnIw8nFbcaAgYMIDyAsvaDiTkpe53PSCspvLQoKD9XTN+xsldHg5i5Y4o7jV2TTpBdWtC6LSc41MDRS91kaEphRuLJH5UzNL2tNyin+wt7pyfnsurb20+1w/7d7ev+peULel550m+/Sbq3RcEbEpGa/xK6ZklvSmpRd1G0m5xS3192dZbFJm5mV7x1B9xsAK7r5FVq1+yVaubNSzjqz9Rj1Rz6mmNwAuCPNCNgy77kCC8Km47dXycB4kAp9MpHFqIGUUlEnHUkR7wVWPf0MFW1qoJrmy3BVhirKzs3LN4VVeOLyFT1iWn5Zi5Or23TB2vbtS/MW+sXhIbTIngeBXvVaHDCvYxkgqikQ8sVEPMDOeZa3+gaGlbRbdVhXfyacnpaVCSUlv/RLWH3TCbZTrXH/P/U0T8bknJLWuLTcV7R19foMNh6iIckoaErO7Xl579VHQUWrj19IknqvLEYzGaaHAO8iVe3Zjr9NnQTNxFy19wy5eo8Ruv/J8LUjsmagEaiRjp46hLefkstrujUioaOvSXn1mxVa6pqDF6hse7awPHXaHMfuClpqcVRmVvGqW86z5067VzxdPQqKjM9LzSv7XU5QOcWXHJxdHdiDmWjnMBICu5AkI+ZkWLQwSWoDhHEvsBATNEuHayguG44xKyd3fzg2a653JAQ9RkzQ7da8e/kyi1pyw9RsmKWtvdNoNMjrYsJk1rr7ebN7LUaDyXvTYLBRv0cv6DETR0E81yltZSWs9Iv3BM3+1hw8Q3bO+qLp/OLikO5NGm9nLnfMapw2WTxhQloKyu/gqo20J4QZRnlBf0Ox+cmw4rdo1oLFKgsaAoH/9uJ8X38vdy9fb9BHORf5wGXwsrAapdcxbz0DQ42gqIQ1KbnyIsTf8xDoLElG/hnZh8e+SzLz90EYAzrmJytolg8s4meei/xL5y1YKkr47SWRiRkbce4VWWvqHxpTA9djHAR2Q0aYVxYFhq1B+hJF+XouCiiJSMx4GvX1a0dBQ3QtJkPNJzg6z/JKEzEUuLd/BEbGV3eVNyszGvMm5PejSIP5fpilleWjF/Rom0kQ1y8UvyKPVu76706Crjv8XzRpulnbUzbUIm29+31GRtVuSq0Ml3ctcIp3iBmsdxwVbqgmn2WzaZCubIhO5L7EDNd9XghG6w53FPR1CFoCQf9Crj6Rqgoa1rMVfl+zqfkwQ1hZ1ainP3iQto7oXLvZsOF9Ic6nmIDkuv280htylpmJO7vouQmTp8gZAFlBszxDY5NPaijp2YaYmlFceu6WjtdiaYOjEhodnV2tOwtaEOUnpuYWSt2/QdraFBKddO7+vd0TtLXDDNdAWUGj1/nRebaHXb9+yt1gFov4hUbHoWx/yJTthvnwERN6Q9C2gqATirIg6A86uRxsbUbB+lqKK1xEpdveobJtfyOPpRMFQQbEh1ByWbbCfNlCI98IZ/jlZyDuzQgMB4tYan2ItxD5vi1Y5jZB35AK+iYEndBNl+MmBPANrJ9KjM8o+A5RfFXfvuI9yRNjrXXi0vOOyIpXzLdNyCp81cbWXvQdM1FBS1L/OhAPXxOBszg12XAZxablNCZ16AlY2qBIxYKGf62rOM+2fA0MB6uHJ6S/cb+HESxoC3qW8RB0QEdBJwk9X8G73QnqHJxcmH//y+MStI0gaElhAQT9nnxQeOQurOgN/P61sMifTU2z0YcRo8dQbMFGpfmPHG+KtKeo4Zm3KDh5muh7hU7uhlTTdFDq5lyjmLwEqYUO7a4P3Z1InLkU6CJ3KBI0A3xlAwjnPfZQFAkaFvuLqdNnjlSUh5gPDZF8FBydmIUGlQFmijA9PD6tFFb/W1mXIyA8rtZhhst4eZdjxXV2P0i7HmxUwIbIpMzDaCQtHX1cNO7v9Q0H68PlCBYR9NuICQaqPK0xxVEmYO1NQY+ZOByCvkJ5ddW0et/pDoL+Q1icVHf4LOU3ZFJCsQfEdhrB43kEhJpkyQSd/7RK15gyUxdpm2jTc9fRIHbQwvCF5Dh7PGhJ8wOcEQQewXXaJ1y+guVPhaB/o9kLvbsraBa4CENoKpBF3xEJ6bsUCZoNY82ev2AWhP91VxYax6+6efr6M+unqqDvlbULKgoK58z3ibexsxcNCtuGy7qXL1yKWwERcaVqauo0/cnZYSKCfus/R9AmwwbR6j2fUuXTe6lixy4ZC/0OuBUiZov7f4SlvkmZ1dmCyzHP359SKraqfJ0pMwdQ+Y56iPoObT7ZShtP/AzRXgR/6uRDr9n/LkS/Au5OC01ynNQdQaPiP4H/tmVxcMRWVbg0JGrbvIVLAzVFZjqZmGfMcneBAC6K9QLyoytlV+d4LvTTEBH1wxq2axsCK7821nrSKPjq4x/WsB0a94XZ83yEWMnJxS1cRNDvGRoZqexyIGCdgLL9+ngEzRYXFTQ+R2ub3qXVe4tEZwnrDl+EL51IObU+5BWkRxPsNal06z5Y7ah7+Uyw14HFHdjli68m5kSBiQ4UkxtLy9cm4VrbhHcOO45Dr96zDz71Dqre/zXON+hmULjTaIgJsfHf7pCNP8uK2c7RyZmNMYsEf7clGfnN+Cs7wsCs59U58xcskQ32FAmauQ9smE8VSofjbi8JicpiPcrEKQ6TFFloZXklyY3OlPwOV2Ura9iw0KFyQWFO8VXnWR5uFiNGaoCkhFr+oTHZrCeQEfR1c0sr60cvaGZtg5LyYH1/hqAShRdf5Sc8foLI8uAabIDr8D7VHz0GN+U4TZ15P6IfZW0M4edB1IZKr2k1jqiwMYBqhXcVZWcl2RLW85Sz7i+kpUXdsdAIzL6E33koNC5FZUYkZBz2XhLs1T7oz8Ts5Oo2jVlmWTEzNwU9wMqh5haaPn4hiWn55bdFRH0N1s6zo6gV+NDXcP3XlsUmK+PrOO9cSHTSvhmu7gv6928bEZw8ddpkEUH/DBfqGNIcAJtEyH4/GJ28/MPO9yZ8/sF4iKkhfGh3CPp3kYZyGXwRPAWeVkB27A3k3SJbLwlZKy6ZmlsM7Z3ZQnvXqdT47F24HaWw0mcVWOn7b3OzfTaWpbp3WjzEPodnZkPwL5GLtw0NEHmbmw37TJszAg1jKxqE2DrpSyALCG9Tcnl8V9ZekQ8tWChm+VRkWn5Fa2CEpLBt2hdidpljB+F+JCbmUEnKVh1dPcE/GQDL7hsQVpIiN6MmiPq7WfN8PNrXR4iNcsAintHW0e2L3kFLGWGR+/SRadzyghas4KcjRo3RZz1OVxxuNcomYfmKK/fvUUh7k41yWI4cPQT3dEk8CC5SkfI9EQzNX/v1699LazrG2WrB6r5FNU3gwTxpQKj4dau1B87SsJHyzuLwUdo4fgo+8mXKrd1EiyIXk8MsWxo7eQJ5BbtR5uoyCPmzLl7V2gluQ29xndyXjOiqyA9r6psJ0i80JodZ6GkzZ9lCuP8UG2OOS887hIfdqZVqIziOSs5qTM6VH6tG2b519fB2ZyvavJcEyQ/bxaWc0uqj9cCPTJGgzSwsle7iYzDYSJfFGzKCbjEbZjmVNZzAyPiyh1G39wPZ8hZXDy9PtV7bFo69x5e2Klq6xoJtV/C+QkHXH2ul3LpKYRaQWdBBOp3N6AwPA8pvKEDDeBON5EPwI1j2q8KWBV0vTLoCxuDcK7TmwHYy61LPbYuTVlQqjeiVMb2gojUgPHa5k6v7eARcX7Dp207nsNGQ/LKzk+2nGyuI6AdA0PtThcVJndNlFK68igfp5BsQuoQtVmo/xtZ6wDV4EZb3gZ+wrb2THe7/zv1rsoVGZZeGWVoZK0uLOEMHYv78fpmFtK1I6yA9PhANrhr1cbVn9Sss0vo8ODoxmo259y5sHHSF7QVqD70tfQVLfJknexk2r36VEExq9VWjrDVBtCDUhUwt2CLl+8Gfv8SA0irZywLnVdzDoxbcThue/ZVC0yYp21Vp2pOzp4TEJJax4aaeMAjWaP5CPzuvxYH2wVEJq2SOlwVHJxTgWhZdLayxdXAyQNqsgAhJp/IERcWvWui/zM3De5FVUGRCyf1rJpT7LA0O1urBC8FjrSca4/7zWBnb8pWUB0bEJw4ZaqZ0vYSegaGWf1hsYuC98krKkDYfaY3uvfOhb0Au7p4TUD8SHK/FebvA3SpyO/KuRM8XNN1ljrmevsFjWhcdlukvTEWva64EnxIXHnsx9ugH5LbYXPCbXX3GwvKepMpdjbDykRBxDBVuqKG1cF9qD/2m4ouybwj7dDQcu4vGskZ4g0bZ4j0IjA2RseCr59SQUuSYpmoLr7qfd8/cSTUF969Kt87OESurWNoHrmOke3wL/O8tHjDXpIqn9sAK35JuYfCCwmWetYdeo5CURbDsYygq2xN+8Qu0/lir4FZ0bzuDL4QXZGsPfQpeIOspxsTB8dAwZeZQqjtyAeJiIw7LhLdUFG9h8AfEfxX+8vfSt026uy/H1207KB16Ea7GDfIMmsEfAMfDh2+ErTCLV3voYwguXLqD0sPeOelDMErYYmzDs3cpriCI+vXndc/xCMD8u8XR9vCn2VqOb6UbwdSITrp0n3fBJjACDeYd2njiJkkKI2nAIF7vHI9Y1PMCJtDaA29IJ0E2Sfe5Y/t2/PwAQmajJq+B6WARXJUrwiboQUlefEtdjl4czrMfTPnr19H647dgUf8l3YQmQbot7nuC1W7f2659JrH9c9s2X+xN7z1gKpgDvi2Md6/ceZRmzh/LK5ij98GG0ZZEu1DD0ZMQ4x0I9juqP9JE1ftyIPZEKt2aRWmVFVS4YS2VbqvF50p8zqGiTUkQbhrO3Yw0HwvrqRuPv4PjQTR0ON8+l+Mxgk0sjLfToGWpLlS0cRuE+qXgirDln9X7PqWSLa/Rqt3P05r97N9SvEyrnv6nsM668fhdWr33Mq3YeIySSv3Ied4g6j+Q1yfHnwhsxZfxUAOI0xWWO4syqrZTds1JylrzOvgmLV97Ct/3UFR2CXkH+5DlaHNBxPxfvHH8Z1hvjbYNazQ01UB16WdeLxwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/h/BvzbbC6zw2r50AAAAASUVORK5CYII="
    
    doc.addImage(imgData,450,30,120,70)

    doc.setFontSize(22);
    doc.setFont("helvetica");
    doc.text(20, 100, 'Reporte de incidecias No.');
    doc.setFont("courier");
    doc.setFontSize(16);
    doc.text(20, 120, id);
    
    doc.setFontSize(22);
    doc.setFont("helvetica");
    doc.text(20, 170, 'Motivo');
    doc.setFont("courier");
    doc.setFontSize(16);
    doc.text(20, 190, motivo);
    
    doc.setFontSize(22);
    doc.setFont("helvetica");
    doc.text(20, 240, 'Descripción del problema');
    doc.setFont("courier");
    doc.setFontSize(16);
    doc.text(20, 260, descripcion);
    
    doc.setFontSize(22);
    doc.setFont("helvetica");
    doc.text(20, 310, 'Involucrados');
    doc.setFont("courier");
    doc.setFontSize(16);
    doc.text(20, 330, involucrados);

    doc.setFontSize(22);
    doc.setFont("helvetica");
    doc.text(20, 380, 'Fecha de incidente');
    doc.setFont("courier");
    doc.setFontSize(16);
    doc.text(20, 400, fecha);

    doc.save("a4.pdf");










    // var margin = 20;
    // var scale = (doc.internal.pageSize.width - margin * 2) / document.body.clientWidth;
    // var scale_mobile = (doc.internal.pageSize.width - margin * 2) / document.body.getBoundingClientRect();
    // if (/Android|webOs|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)){
    //     doc.html(crearPdf, {
    //         x : margin,
    //         y :margin,
    //         html2canvas:{
    //             scale: scale_mobile,
    //         },
    //         callback: function(doc){
    //             doc.output('dataurlnewwindow',{filename: 'pdf.pdf'})
    //         }
    //     });
    // } else {
    //     doc.html(crearPdf, {
    //         x : margin,
    //         y :margin,
    //         html2canvas:{
    //             scale: scale,
    //         },
    //         callback: function(doc){
    //             doc.output('dataurlnewwindow',{filename: 'pdf.pdf'})
    //         }
    //     });
    // }
};