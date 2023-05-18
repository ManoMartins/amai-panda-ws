describe('Order detail', () => {
    it('should be able change status', () => {
        cy.visit('orders')

        cy.contains('Mais detalhes').first().click()
        cy.contains('Alterar status').click()

        cy.get('#status').select('DELIVERED')
        cy.get("[data-test='update']").click()
    })

    it('should be able accept request change', () => {
        cy.visit('orders')

        let alreadyChangePage = false
        cy.get('tbody tr').each(($ele) => {
            if (
                $ele.find("span:contains('Troca solicitada')").length &&
                !alreadyChangePage
            ) {
                cy.wrap($ele).within(() => {
                    cy.contains('Mais detalhes').click()
                })

                alreadyChangePage = true
                cy.contains('Aceitar').click()
            }
        })
    })

    it('should be able denied request change', () => {
        cy.visit('orders')

        let alreadyChangePage = false
        cy.get('tbody tr').each(($ele) => {
            if (
                $ele.find("span:contains('Troca solicitada')").length &&
                !alreadyChangePage
            ) {
                cy.wrap($ele).within(() => {
                    cy.contains('Mais detalhes').click()
                })

                alreadyChangePage = true
                cy.contains('Recusar').click()
            }
        })
    })
})
