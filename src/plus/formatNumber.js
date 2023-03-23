export const formatNumber = (price) => {
    return price.toLocaleString("es-CL");
};

const currencyFormatter = Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
});

export const formatCurrency = (value) => {
    return currencyFormatter.format(value);
};
