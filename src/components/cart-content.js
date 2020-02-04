import $ from 'jquery';
import { getService } from '../common/get-service';

export const cartContent = () => {
    const typeOfService = "rooms";
    const id = 1;

    const fragment = $(new DocumentFragment());

    const container = $('<div class="container"></div>');
    const content = $('<h3 class="text-center m-3">Twój koszyk</h3>');
    container.append(content);

    const columnNames = ['lp', 'Nazwa produktu', 'Ilość', 'Cena', 'Wartość', 'Usunąć'];
    const tableRow = $('<tr>');
    const tableTh = $('<th>');

    //  const container = $('<div>');
    const table = $('<table>').addClass('table table-hover');

    const tHeadRow = $('<thead>');
    const tr = $('<tr>');
    tHeadRow.append(tr);
    table.append(tHeadRow);

    for (const name of columnNames) {
        const tableTh = $('<th>').text(name);
        tr.append(tableTh);
    }

    const tBody = $('<tbody>');

    const createRow = getService.getServices(typeOfService, id)
        .then(services => {
            console.log("services: ", services);
            const { name, price } = services[id];
            console.log("service: ", services[id]);
            let tr = $('<tr>');
            for (let i = 0; i < 5; i++) {
                const td = $('<td>').text("ff");
                tr.append(td);
            }

            return tBody.append(tr);
        })


    table.append(tBody);

    container.append(table);
    fragment.append(container);
    //  container.append(fragment);
    //   fragment.append(table);

    return fragment;
}