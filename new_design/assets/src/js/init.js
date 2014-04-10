$().ready(function () {

    window.auto_increment = -1;
    window.monthly_payment = 0;
    if ($("#monthly-payment").val()) {
        window.monthly_payment = $("#monthly-payment").val();
    }
    window.loans = {};
    window.payment_type = "avalanche";

    Router.init();

    LoanController.add_loan();
    Router.add_monthy_payment_listener();
    Router.add_calculate_listener();

    Handlebars.registerPartial("row", $("#loan-table-row-partial").html());
});

