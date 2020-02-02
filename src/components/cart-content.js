import $ from 'jquery';

export const cartContent = () => {
    const fragment = $(new DocumentFragment());
    const columnNames = ['lp', 'Nazwa produktu', 'Ilość', 'Cena', 'Wartość'];
    // const tableTitle = "Twój koszyk";
    // const tableBody = $('<tbody>');
    const tableRow = $('<tr>');
    const tableTh = $('<th>');
    // const tableTd = $('<td>');

    const container = $('<div>');
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

    tBody.append(createDataRow());
    tBody.append(createDataRow());
    table.append(tBody);


    fragment.append(table);
    container.append(fragment);


    // for (const name of columnNames) {
    //     const tableTh = $('<th>').text(name);
    //     tHeadRow.append(tableTh);
    // }

    console.log("tHeadRow", container.html());

    // const tableComponents = table
    //     .append(tableHeader)
    //     .append(tableBody);
    // table.append(tableComponents);


    // table.append(tableHeader);

    fragment.append(table);

    return fragment;
}


function createDataRow() {
    let tr = $('<tr>');
    for (let i = 0; i < 5; i++) {
        const td = $('<td>').text("jbjkhv");
        tr.append(td);
    }
    return tr;
}