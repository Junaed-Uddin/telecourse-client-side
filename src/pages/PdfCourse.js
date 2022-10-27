import React from 'react';
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 16,
        fontSize: 12,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    header: {
        fontSize: 16,
        marginTop: 14,
        textAlign: "center",
        color: "black",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});


const PdfCourse = ({ course }) => {
    const { course_name, category, description } = course;

    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.title} fixed>Course Details</Text>
                <Text style={styles.header}>{category}</Text>
                <Text style={styles.header}>{course_name}</Text>

                <Text style={styles.text}>
                    {description}
                </Text>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>
    );
};

export default PdfCourse;