import React from 'react';


const Companies = ({ companies }) =>  (
    <div style={styles.productionCompanies}>
        <h3>Production Companies</h3>
        <div style={styles.companyList} >
            {companies?.map((company) => (
                <div key={company.id} style={styles.companyItem} >
                    {company.logo_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w92${company.logo_path}`}
                            alt={company.name}
                            style={styles.companyImage}
                        />
                    )}
                    {!company.logo_path && (
                        <img
                            src={`https://via.placeholder.com/92x92.png?text=No+Image`}
                            alt={company.name}
                            style={styles.companyImage}
                        />
                    )}
                    <p style={styles.companyName}>{company.name}</p>
                    
                </div>
            ))}
        </div>
    </div>
)

export default Companies


const styles = {
    productionCompanies: {
        marginTop: '16px'
    },
    companyList: {
        display: 'flex',
        overflowX: 'auto',
        gap: '15px'
    },
    companyItem: {
        flex: '0 0 auto',
        textAlign: 'center',
        width: '100px'
    },
    companyImage: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        objectFit: 'contain',
        background: '#f0f0f0',
        padding: '8px',
        boxSizing: 'border-box',
    },
    companyName: {
        marginTop: '8px',
        fontSize: '10px',
        fontWeight: 'light',
        textAlign: 'center',
    }
}