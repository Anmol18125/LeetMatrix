<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <body>
                <h2>Student Performance</h2>
                <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#f0f0f0" />

                    <xsl:for-each select="students/student[1]/marks/subject">
                        <xsl:variable name="subject" select="@name" />
                        <xsl:variable name="score" select="." />
                        <xsl:variable name="index" select="position()" />
                        <xsl:variable name="x" select="($index - 1) * 100 + 50" />
                        <xsl:variable name="barHeight" select="$score * 2" />

                        <rect x="{$x}" y="{250 - $barHeight}" width="50" height="{$barHeight}" fill="#4CAF50" />
                        <text x="{$x}" y="270" font-size="12"><xsl:value-of select="$subject" /></text>
                        <text x="{$x}" y="{250 - $barHeight - 10}" font-size="12"><xsl:value-of select="$score" /></text>
                    </xsl:for-each>

                </svg>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
